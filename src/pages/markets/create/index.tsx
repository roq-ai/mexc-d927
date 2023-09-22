import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createMarket } from 'apiSdk/markets';
import { marketValidationSchema } from 'validationSchema/markets';
import { MarketInterface } from 'interfaces/market';

function MarketCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: MarketInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createMarket(values);
      resetForm();
      router.push('/markets');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<MarketInterface>({
    initialValues: {
      name: '',
      location: '',
      opening_hours: new Date(new Date().toDateString()),
      closing_hours: new Date(new Date().toDateString()),
    },
    validationSchema: marketValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Markets',
              link: '/markets',
            },
            {
              label: 'Create Market',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Market
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.location}
            label={'Location'}
            props={{
              name: 'location',
              placeholder: 'Location',
              value: formik.values?.location,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="opening_hours" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Opening Hours
            </FormLabel>
            <DatePicker
              selected={formik.values?.opening_hours ? new Date(formik.values?.opening_hours) : null}
              onChange={(value: Date) => formik.setFieldValue('opening_hours', value)}
            />
          </FormControl>
          <FormControl id="closing_hours" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Closing Hours
            </FormLabel>
            <DatePicker
              selected={formik.values?.closing_hours ? new Date(formik.values?.closing_hours) : null}
              onChange={(value: Date) => formik.setFieldValue('closing_hours', value)}
            />
          </FormControl>

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/markets')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'market',
    operation: AccessOperationEnum.CREATE,
  }),
)(MarketCreatePage);

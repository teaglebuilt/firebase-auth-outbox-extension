interface Configuration {
  fieldsToInclude: string[];
  location: string;
}

const config: Configuration = {
  fieldsToInclude: process.env.FIELDS_TO_INCLUDE!.split(','),
  location: process.env.FUNCTIONS_LOCATION!,
};

export default config;

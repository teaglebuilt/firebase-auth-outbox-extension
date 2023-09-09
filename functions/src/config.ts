interface IConfig {
  fieldsToInclude: string[];
  location: string;
}

const config: IConfig = {
  fieldsToInclude: process.env.FIELDS_TO_INCLUDE!.split(','),
  location: process.env.FUNCTIONS_LOCATION!,
};

export default config;

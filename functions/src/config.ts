interface Configuration {
  broker: string;
  topic: string;
  fieldsToInclude: string[];
  location: string;
}

const config: Configuration = {
  fieldsToInclude: process.env.FIELDS_TO_INCLUDE!.split(','),
  location: process.env.FUNCTIONS_LOCATION!,
  broker: process.env.KAFKA_BROKER!,
  topic: process.env.KAFKA_TOPIC!
};

export default config;

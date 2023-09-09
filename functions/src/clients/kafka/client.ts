import * as KafkaJS from 'kafkajs';

export interface MicroserviceMessage<BodyType> {
  messageSchema: any;
  getMessageName(): string;
  fullyQualifiedName(): string;
}


export class KafkaClient {
  kafka: KafkaJS.Kafka;
  producer: KafkaJS.Producer;
  protected isReady = false;

  /**
   * Instantiates a new Kafka client
   *
   * @param brokers - List of brokers to connect to
   * @param kafkaConfig - Kafka client configuration
   */
  constructor(kafkaConfig: KafkaJS.KafkaConfig) {
    this.kafka = new KafkaJS.Kafka({
      clientId: 'firebase-auth-producer',
      ...kafkaConfig,
    });
    this.producer = this.kafka.producer(kafkaConfig)
  }

  async init() {
    if(this.ready())
      await this.producer.connect();
  }

  /**
   * Returns true if the Producer is ready to produce messages
   */
  public ready(): boolean {
    return this.isReady;
  }

  async disconnect() {
    await this.producer.disconnect();
  }

  async send<T>(
    topicName: string,
    payload: T,
  ): Promise<KafkaJS.RecordMetadata[]> {
    const result = await this.producer.send({
      topic: topicName,
      messages: [
        {
          value: JSON.stringify(payload),
        },
      ],
    });
    return result;
  }
}

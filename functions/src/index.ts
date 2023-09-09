/*
 * This template contains a HTTP function that responds
 * with a greeting when called
 *
 * Reference PARAMETERS in your functions code with:
 * `process.env.<parameter-name>`
 * Learn more about building extensions in the docs:
 * https://firebase.google.com/docs/extensions/publishers
 */
import { initializeApp } from "firebase-admin/app";
import { UserRecord } from "firebase-admin/auth";
import * as functions from "firebase-functions";
import config from './config'
import { AuthUserRecord } from "firebase-functions/lib/common/providers/identity";
import { KafkaClient } from "./clients/kafka/client";

initializeApp();
const kafka = new KafkaClient({
  brokers: [config.broker],
})

const getUserAuthFields = (user: UserRecord) => {
  const fields: any = {};

  for (const field of config.fieldsToInclude) {
    const fieldValue = user[field as keyof UserRecord];
    if (fieldValue) {
      fields[field] = fieldValue;
    }
  }

  return fields;
};


export const produceUserCreatedEvent = functions.auth
  .user()
  .onCreate(async (user) => {
    const data = getUserAuthFields(user);
    console.log(data)
    await kafka.send(config.topic, data)
  });

export const produceUserDeletedEvent = functions.auth
  .user()
  .onDelete(async (user) => {
    const data = getUserAuthFields(user);
    console.log(data)
    await kafka.send(config.topic, data)
  });


export const produceUserSignInEvent = functions.auth
  .user()
  .beforeSignIn(async (auth: AuthUserRecord) => {
    console.log(auth)
    await kafka.send(config.topic, auth)
  });

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
import { UserRecord, getAuth } from "firebase-admin/auth";
import * as functions from "firebase-functions";
import config from './config'

initializeApp();

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

exports.greetTheWorld = functions.https.onRequest(
  (req: functions.Request, res: functions.Response) => {
    // Here we reference a user-provided parameter
    // (its value is provided by the user during installation)
    const consumerProvidedGreeting = process.env.GREETING;

    // And here we reference an auto-populated parameter
    // (its value is provided by Firebase after installation)
    const instanceId = process.env.EXT_INSTANCE_ID;

    const greeting = `${consumerProvidedGreeting} World from ${instanceId}`;

    res.send(greeting);
  });

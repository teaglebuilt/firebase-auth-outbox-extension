# Firebase Auth Outbox Extension

[![CICD](https://github.com/teaglebuilt/firebase-auth-outbox-extension/actions/workflows/main.yaml/badge.svg)](https://github.com/teaglebuilt/firebase-auth-outbox-extension/actions/workflows/main.yaml)

Publishes events raised from firebase authentication to a broker of choosing. The extension refers to outbox since this data is persisted, however some events in this extension can be captured that occur before a persisted action occurs.

#### Events Captured

Currently, here are the events available to produce. Events are labeled as 1st or 2nd class citizens under the scope of firebase. Therefore, these events

* _2nd Class_ `User Created`
* _2nd Class_ `User Deleted`
* _1st Class_ `On User Sign In`


#### Broker Clients Available

Two parameters are required.
- `Broker` - `https://broker.com:9092`
- `Topic` - `my-topic-to-publish-events-to`


1. **Kafka** - Uses [KafkaJS](https://kafka.js.org/docs/getting-started) and is currently the only supported client.
2. **NATS** - Next supported client on the list


### Installation

Visit extension in firebase extensions store [here](https://console.firebase.google.com/project/teaglebuilt-6226f/publisher/extensions/firebase-auth-outbox/v/0.0.1-beta.0).

You can also click [this link](https://console.firebase.google.com/project/teaglebuilt-6226f/publisher/extensions/firebase-auth-outbox/v/0.0.1-beta.0) to directly install the extension, assuming you already have firebase and authentication setup.

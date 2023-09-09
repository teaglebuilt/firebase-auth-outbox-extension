# Firebase Auth Outbox Extension

Publishes events raised from firebase authentication to a broker of choosing. The extension refers to outbox since this data is persisted, however some events in this extension can be captured that occur before a persisted action occurs.

#### Events Captured

Currently, here are the events available to produce. Events are labeled as 1st or 2nd class citizens under the scope of firebase. Therefore, these events

* _2nd Class_ `User Created`
* _2nd Class_ `User Deleted`
* _1st Class_ `On User Sign In`


#### Brokers Available

1. **Kafka** - TODO: explain
2. 
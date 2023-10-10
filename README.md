# transmission

A notification preference center API for newsletter and reoccuring communications to subscription based systems.


Technology Used:

Express, TypeScript, TypeORM, PostgreSQL, Docker, Docker-Compose, Jest, Supertest

## Getting Started

### Prerequisites

Make sure to install the dependancies before trying to start the api. 

You will need to install Docker for a quick start.

- [Docker](https://docs.docker.com/get-docker/)

### Installation

#### Starting The API

Start the API using the start command. 

```
docker build -t transmission . 
docker run transmission npm ci && npm run start
```

when the server has successfully started you should see a message simular to below

```
App listening on the port 3000
```

<details>
  <summary>Advanced Usage</summary>

<h3>Setting Custom Port</h3>

<p>You can supply a different port by setting the Environment Variable `PORT` to your desired port.</p>

<h3>Production Build</h3>

<p>In production you will use a target distrobution build that will not include the devdependancies</p>

```bash
npm run build
npm run serve
```

</details>

### Endpoints 




### Datastructure


Describing the application from the model perspective, we have the following:
A user which is tied to a unique email and User_id can have zero or many subscriptions.
A subscription is tied to a unique subscription_id and can have zero or many preferences.
A preference is tied to a unique preference_id and can have zero or many options.
An option is tied to a unique option_id and has a boolean state of `active` and a name and description.
An action is tied to a unique action_id and is generated from changed to preferences buy a user.

A user can only change a preference if they are "subscribed" to the subscription, otherwise they can not control the preference.

States of a subscription:
- active - the user is subscribed to the subscription
- inactive - the user is not subscribed to the subscription
- pending - the user has requested to subscribe to the subscription, but has not confirmed their subscription through email confirmation or some other means.

If there is no relationship between a user and a subscription, the user is not subscribed to the subscription, which is distinct over "inactive" which is reserved for users who subscribed, and then unsubscribed from a service, allowing for a soft-delete of the relationship.


Preferences are a logical grouping of options for a subscription. This can be best conceptualized in a newsletter, as a common preference that would be allowed to be toggled "on" or "off". 
Subscription (Subscription based Thing) would have a single preference, which would be the newsletter.
Preference (Newsletter) - would have at least one Option (Recieve email newsletter) which would be a boolean value.
Preference (SMS Notifications) An additional preference could be added to the newsletter, such as "Recieve SMS newsletter" which would be a boolean value as well.


The datastructure is as follows:







# Datastructure

Describing the application from the model perspective, we have the following Objects and their relationships:


## Users


<div align="center">
  <img src="https://github.com/Crucible-Standard/transmission/assets/127320/00d14c94-5e77-4a4f-b632-8ff2cb547cd5" alt="Users Table" width="500px" />
</div>

A user which is tied to a unique email and User_id can have zero or many subscriptions.
A user can only change a preference if they are "subscribed" to the subscription, otherwise they can not control the preference.


## Subscriptions

<div align="center"> 
  <img src="https://github.com/Crucible-Standard/transmission/assets/127320/6b98e51d-48ee-46f7-8a7b-b52954f035ca" alt="Subscriptions Table" width="500px" />
</div>


A subscription is tied to a unique subscription_id and can have zero or many preferences.
States of a subscription:
- active - the user is subscribed to the subscription
- inactive - the user is not subscribed to the subscription
- pending - the user has requested to subscribe to the subscription, but has not confirmed their subscription through email confirmation or some other means.


## Users_Subscriptions
  
<div align="center">
  <img src="https://github.com/Crucible-Standard/transmission/assets/127320/89317bd9-a71a-41cb-b45c-3c4d742a82df" alt="Users_Subscriptions Table"  width="500px" />
</div>

If there is no relationship between a user and a subscription, the user is not subscribed to the subscription, which is distinct over "inactive" which is reserved for users who subscribed, and then unsubscribed from a service, allowing for a soft-delete of the relationship.
Subscription (Subscription based Thing) would have a single preference, which would be the newsletter.


## Preferences

A preference is tied to a unique preference_id and can have zero or many options.
Preferences are a logical grouping of options for a subscription. This can be best conceptualized in a newsletter, as a common preference that would be allowed to be toggled "on" or "off". 
Preference (Newsletter) - would have at least one Option (Recieve email newsletter) which would be a boolean value.

## Options

An option is tied to a unique option_id and has a boolean state of `active` and a name and description.



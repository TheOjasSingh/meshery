import { graphql, requestSubscription } from "react-relay";
import { createRelayEnvironment } from "../../../lib/relayEnvironment";

const eventsSubscription = graphql`
subscription EventsSubscription {
  event: subscribeEvents {
    id
    userID
    actedUpon
    operationID
    systemID
    severity
    action
    category
    description
    metadata
    createdAt
    updatedAt
    deletedAt
  }
}
`;

export default function subscribeEvents(dataCB) {
  const environment = createRelayEnvironment({});

  requestSubscription(environment, {
    subscription : eventsSubscription,
    onNext : dataCB,
    onError : (error) => console.log(`An error occured:`, error),
  });
}

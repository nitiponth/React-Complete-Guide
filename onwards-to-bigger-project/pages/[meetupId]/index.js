import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        img={
          "https://media.istockphoto.com/photos/beach-of-taipu-de-fora-in-marau-bahia-brazil-picture-id519916631"
        }
        title={"A First Meetup"}
        address={"Some address 5, 12345 Some city"}
        description={"This is a first meetup!"}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupsData: {
        img: "https://media.istockphoto.com/photos/beach-of-taipu-de-fora-in-marau-bahia-brazil-picture-id519916631",
        id: meetupId,
        title: "A First Meetup",
        address: "Some address 5, 12345 Some city",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetails;

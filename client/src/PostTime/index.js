import moment from "moment"

const PostTime = (props) => {
  const job = props.time

  const currentTime = moment()

  // Get the time and date when the job was posted
  const jobTime = moment(job)

  // Calculate the difference between the current time and the job posting time
  const timeDiff = moment.duration(currentTime.diff(jobTime))

  // Format the time difference as "Just Now", "1 day ago", "Few hours ago", etc.
  const formattedTimeDiff = getTimeDifferenceString(timeDiff)

  function getTimeDifferenceString(timeDiff) {
    if (timeDiff.asSeconds() < 60) {
      return "Just Now"
    } else if (timeDiff.asMinutes() < 60) {
      return `${Math.floor(timeDiff.asMinutes())} minute${
        timeDiff.asMinutes() >= 2 ? "s" : ""
      } ago`
    } else if (timeDiff.asHours() < 24) {
      return `${Math.floor(timeDiff.asHours())} hour${
        timeDiff.asHours() >= 2 ? "s" : ""
      } ago`
    } else {
      return `${Math.floor(timeDiff.asDays())} day${
        timeDiff.asDays() >= 2 ? "s" : ""
      } ago`
    }
  }

  return formattedTimeDiff
}

export default PostTime

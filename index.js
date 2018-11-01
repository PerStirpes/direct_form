function handleFormSubmission(evt) {
  evt.preventDefault()
  let form = document.querySelector('#contact_us_form')
  let { name, email, question, severity } = form

  const contactUsData = {
    name: trimName(name),
    email: getEmail(email),
    questionText: getQuestionText(question),
    id: '2c9985ab668037e00166b31c796134ef',
    metadata: {
      source_page: getURL(),
      date: getDate(),
      severity: getSeverity(severity),
      simple_name: countNameLength(name),
    },
  }

  console.log('%c⚠️', 'font-size: 10em')
  console.log('Check out the contact us data: ', contactUsData)

  if (severity.value === 'Low' || severity.value === 'Medium') {
    DirectlyRTM('askQuestion', contactUsData)
  }

  form.reset()
}

function countNameLength(name) {
  return name.value.trim().split(' ').length > 1 ? false : true
}

function trimName(name) {
  return name.value.trim()
}

function getDate() {
  return new Date().toDateString()
}

function getURL() {
  return window.location.href
}

function getEmail(email) {
  return email.value
}

function getSeverity(severity) {
  return severity.value
}

function getQuestionText(question) {
  return question.value
}

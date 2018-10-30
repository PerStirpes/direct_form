function handleFormSubmission(
  event,
  form = document.querySelector('#contact_us_form'),
) {
  event.preventDefault()

  const { name, email, question, severity } = form

  const contactUsData = {
    name: name.value.trim(),
    email: email.value,
    questionText: question.value,
    id: '2c9985ab668037e00166b31c796134ef',
    metadata: {
      source_page: window.location.href,
      date: new Date().toDateString(),
      servity: severity.value,
      simple_name: name.value.split(' ').length > 1 ? false : true,
    },
  }

  console.log('Severity: ', severity.value)

  if (severity.value === 'Low' || severity.value === 'Medium') {
    DirectlyRTM('askQuestion', contactUsData)
  }
}

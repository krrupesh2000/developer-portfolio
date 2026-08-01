const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

function getFieldValue(formData, fieldName) {
  return String(formData.get(fieldName) || '').trim();
}

function buildPayload(formData) {
  const name = getFieldValue(formData, 'name');
  const email = getFieldValue(formData, 'email');
  const subject = getFieldValue(formData, 'subject');
  const message = getFieldValue(formData, 'message');

  return {
    name,
    email,
    subject,
    message,
    _replyto: email,
    source: getFieldValue(formData, 'source') || 'Portfolio Website',
  };
}

function getFormspreeError(data) {
  if (Array.isArray(data?.errors) && data.errors.length > 0) {
    return data.errors
      .map((error) => error.message)
      .filter(Boolean)
      .join(' ');
  }

  return data?.error || '';
}

export async function sendContactMessage(form) {
  if (!FORMSPREE_ENDPOINT) {
    throw new Error(
      'Please email me directly at krrupesh2000@gmail.com while the form is being configured.',
    );
  }

  const payload = buildPayload(new FormData(form));

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      getFormspreeError(data) || "Your message couldn't be sent. Please try again.",
    );
  }

  return data;
}

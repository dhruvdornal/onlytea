function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const upi = document.getElementById('upi').value;
  const encodedName = encodeURIComponent(name);
  const encodedUPI = encodeURIComponent(upi);
  const thisText = `https://dhruvdornal.github.io/onlytea/support.html?name=${encodedName}&upi=${encodedUPI}`;
  const copyButton = document.getElementById('copyButton');

  // Copy button functionality
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(thisText)
      .then(() => {
        Swal.fire({
          title: "Hooray!!! 🥳🎉, you have made your donation page",
          showDenyButton: true, // Visit button
          showCancelButton: true, // WhatsApp share button
          confirmButtonText: "Copy",
          denyButtonText: `Visit`,
          cancelButtonText: `Share to WhatsApp`
        }).then((result) => {
          if (result.isConfirmed) {
            // Copy the thisText to clipboard
            navigator.clipboard.writeText(thisText).then(() => {
              Swal.fire({
                title: "Copied to clipboard!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                // After showing the success message, show the same prompt again
                Swal.fire({
                  title: "Hooray!!! 🥳🎉, you have made your donation page",
                  showDenyButton: true,
                  showCancelButton: true,
                  confirmButtonText: "Copy",
                  denyButtonText: `Visit`,
                  cancelButtonText: `Share to WhatsApp`
                }).then((innerResult) => {
                  if (innerResult.isConfirmed) {
                    navigator.clipboard.writeText(thisText).then(() => {
                      Swal.fire("Copied to clipboard!", "", "success");
                    }).catch(() => {
                      Swal.fire("Failed to copy!", "", "error");
                    });
                  } else if (innerResult.isDenied) {
                    window.open(`${thisText}`, "_blank");
                  } else if (innerResult.dismiss === Swal.DismissReason.cancel) {
                    // WhatsApp Share functionality when "Share to WhatsApp" button is clicked
                    const customMessage = `Heyy, support me with your desired donation via this link: ${thisText}`; // Customizable message
                    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(customMessage)}`;
                    window.open(whatsappURL, '_blank');
                  }
                });
              });
            }).catch(() => {
              Swal.fire("Failed to copy!", "", "error");
            });
          } else if (result.isDenied) {
            window.open(`${thisText}`, "_blank");
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            // WhatsApp Share functionality when "Share to WhatsApp" button is clicked
            const customMessage = `Heyy, support me via this link: ${thisText}`; // Customizable message
            const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(customMessage)}`;
            window.open(whatsappURL, '_blank');
          }
        });
      })
      .catch(err => {
        alert("Failed to copy");
      });
  });
}






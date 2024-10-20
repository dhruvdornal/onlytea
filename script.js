// function handleFormSubmit(event) {
//   event.preventDefault();
//   const name = document.getElementById('name').value;
//   const upi = document.getElementById('upi').value;
//   const encodedName = encodeURIComponent(name);
//   const encodedUPI = encodeURIComponent(upi);
//   const thisText = `https://dhruvdornal.github.io/onlytea/support.html?name=${encodedName}&upi=${encodedUPI}`;
//   const copyButton = document.getElementById('copyButton');
//   const shareButton = document.getElementById('shareButton'); // New Share to WhatsApp button

//   // Copy button functionality
//   copyButton.addEventListener('click', () => {
//     navigator.clipboard.writeText(thisText)
//       .then(() => {
//         Swal.fire({
//           title: "Hooray!!! 🥳🎉, you have made your donation page",
//           showDenyButton: true,
//           showCancelButton: true,
//           confirmButtonText: "Copy Again",
//           denyButtonText: `Visit`
//         }).then((result) => {
//           if (result.isConfirmed) {
//             // Copy the thisText to clipboard
//             navigator.clipboard.writeText(thisText).then(() => {
//               Swal.fire({
//                 title: "Copied to clipboard!",
//                 icon: "success",
//                 showConfirmButton: false,
//                 timer: 1500
//               }).then(() => {
//                 // After showing the success message, show the same prompt again
//                 Swal.fire({
//                   title: "Hooray!!! 🥳🎉, you have made your donation page",
//                   showDenyButton: true,
//                   confirmButtonText: "Copy Again",
//                   denyButtonText: `Visit`
//                 }).then((innerResult) => {
//                   if (innerResult.isConfirmed) {
//                     navigator.clipboard.writeText(thisText).then(() => {
//                       Swal.fire("Copied to clipboard!", "", "success");
//                     }).catch(() => {
//                       Swal.fire("Failed to copy!", "", "error");
//                     });
//                   } else if (innerResult.isDenied) {
//                     window.open(`${thisText}`, "_blank");
//                   }
//                 });
//               });
//             }).catch(() => {
//               Swal.fire("Failed to copy!", "", "error");
//             });
//           } else if (result.isDenied) {
//             window.open(`${thisText}`, "_blank");
//           }
//         });
//       })
//       .catch(err => {
//         alert("Failed to copy");
//       });
//   });

//   // WhatsApp Share button functionality
//   shareButton.addEventListener('click', () => {
//     const customMessage = `Heyy, support me via this link: ${thisText}`; // Customizable message
//     const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(customMessage)}`;

//     // Open WhatsApp with the custom message in a new tab
//     window.open(whatsappURL, '_blank');
//   });
// }



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
          confirmButtonText: "Copy Again",
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
                  confirmButtonText: "Copy Again",
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





// function handleFormSubmit(event) {
//   event.preventDefault();
//   const name = document.getElementById('name').value;
//   const upi = document.getElementById('upi').value;
//   const encodedName = encodeURIComponent(name);
//   const encodedUPI = encodeURIComponent(upi);
//   const thisText = `https://dhruvdornal.github.io/onlytea/support.html?name=${encodedName}&upi=${encodedUPI}`;
//   const copyButton = document.getElementById('copyButton');

//   copyButton.addEventListener('click', () => {
//     // Copy to clipboard initially
//     navigator.clipboard.writeText(thisText)
//       .then(() => {
//         // Show the first Swal.fire prompt after successfully copying
//         Swal.fire({
//           title: "Hooray!!! 🥳🎉, you have made your donation page",
//           showDenyButton: true,
//           confirmButtonText: "Copy",
//           denyButtonText: `Visit`
//         }).then((result) => {
//           if (result.isConfirmed) {
//             // If the "Copy" button is clicked, copy the text and show the prompt
//             navigator.clipboard.writeText(thisText).then(() => {
//               Swal.fire({
//                 title: "Copied to clipboard!",
//                 icon: "success",
//                 showConfirmButton: false,
//                 timer: 1500
//               }).then(() => {
//                 // After showing the success message, show the same prompt again
//                 Swal.fire({
//                   title: "Hooray!!! 🥳🎉, you have successfully made your donation page",
//                   showDenyButton: true,
//                   confirmButtonText: "Copy Again",
//                   denyButtonText: `Visit`
//                 }).then((innerResult) => {
//                   if (innerResult.isConfirmed) {
//                     navigator.clipboard.writeText(thisText).then(() => {
//                       Swal.fire("Copied to clipboard!", "", "success");
//                     }).catch(() => {
//                       Swal.fire("Failed to copy!", "", "error");
//                     });
//                   } else if (innerResult.isDenied) {
//                     // If the "Visit" button is clicked, open the link in a new tab
//                     window.open(`${thisText}`, "_blank");
//                   }
//                 });
//               });
//             }).catch(() => {
//               Swal.fire("Failed to copy!", "", "error");
//             });
//           } else if (result.isDenied) {
//             // If the "Visit" button is clicked, open the link in a new tab
//             window.open(`${thisText}`, "_blank");
//           }
//         });
//       })
//       .catch(err => {
//         alert("Failed to copy");
//       });
//   });
// }

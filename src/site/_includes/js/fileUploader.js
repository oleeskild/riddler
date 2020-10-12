const inputElement = document.getElementById("image-upload");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files;
  if(!fileList.length){
    return;
  }
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Client-ID 505afdd1a6cdf20");

  var formdata = new FormData();
  formdata.append("image", fileList[0]);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  var subBtn = $("#submit-btn");
  var loading = $("#loading");
  subBtn.setAttribute("disabled", "disabled");
  loading.style.display="block";

  fetch("https://api.imgur.com/3/image", requestOptions)
    .then(response => response.json())
    .then(result => {
      var imgLink = result.data.link;
      document.getElementById("image-link").value = imgLink;
      document.getElementById("image-preview").src = imgLink;
      document.getElementById("image-preview").style.display = "block";
      loading.style.display="none";
      subBtn.removeAttribute("disabled");
    })
    .catch(error => console.log('error', error));
}

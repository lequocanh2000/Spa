var btnModal = document.querySelector('.js-btn-modal')
var modal = document.querySelector('.js-modal')
var modalDialog = document.querySelector('.js-modal-dialog')
var modalForm = document.querySelector('.js-modal-form')
var btnSubmit = document.querySelector('.js-btn-submit')
var btnCancle = document.querySelector('.js-btn-cancle')
console.log(btnModal);
console.log(modal);
console.log(modalForm)
console.log(modalDialog);
console.log(btnSubmit);
console.log(btnCancle);


//Open modal
btnModal.onclick = () => {
  modal.classList.add('open')
  console.log('open')
}

//Close modal
btnCancle.onclick = () => {
  modal.classList.remove('open')
  console.log('close')
}

// stopPropagation when click outside modal
modalDialog.addEventListener('click',(e) => {
  console.log('still show')
  e.stopPropagation()
})

//Close modal when click outside modal
modal.addEventListener('click',(e) => {
  modal.classList.remove('open')
  console.log('close')
})

//Submit form
btnSubmit.onclick = () => {
  let name = modalForm[0].value
  let phone = modalForm[1].value
  let service = modalForm[2].value
  
  console.log(typeof name,typeof phone,typeof service);
  if(name==''||phone==''||service==''){
    confirm(`Vui lòng nhập đầy đủ thông tin`)
  }else{
    modal.classList.remove('open')
    setTimeout(()=>{
      console.log(`${name} ${phone} ${service}`)
      confirm(`Gửi thành công
      Họ tên: ${name}
      SĐT: ${phone}
      Dịch vụ: ${service}`)

      modalForm[0].value = ''
      modalForm[1].value = ''
      modalForm[2].value = ''
    },500)
  }
}

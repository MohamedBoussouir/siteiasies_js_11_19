Arry={
Id:'',
Nom:'',
Email:'',
Âge:''
};
let id_form=0;

function setlocalStorage(kay,elment){
    
localStorage.setItem(kay,elment)
}
const userForm=document.getElementById("userForm");
const submitBtn=document.getElementById("submitBtn");
const tableContainer=document.getElementById("tableContainer");
const userTableBody=document.getElementById("userTableBody");




submitBtn.addEventListener('click',Ajouter);

function Ajouter(){
    
  Arry.Id=userForm[0].value;
  Arry.Nom=userForm[1].value;
  Arry.Email=userForm[2].value;
  Arry.Âge=userForm[3].value;
  console.log(Arry)
  setlocalStorage('Arry',Arry);
  console.log(localStorage.getItem('Arry'));
  tableContainer.style.display='grid'
  id_form++;
  userTableBody.innerHTML+=
  `
  <tr>
                            <td>
                                <span class="user-name" data-bs-toggle="modal" data-bs-target="#userDetailModal">
                                    ${userForm[1].value}
                                </span>
                            </td>
                            <td>${userForm[2].value}
                            </td>
                            <td>${userForm[3].value}</td>
                            <td>
                                <button class="btn btn-sm btn-danger w-100">Supprimer</button>
                            </td>
                        </tr>
  `

  
}



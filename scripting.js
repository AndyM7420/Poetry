function createParagraph(){
    const para=document.createElement("p");
    const para1=document.createElement("p");
    const para2=document.createElement("p");

    para.textContent="long long time ago";
    para1.textContent="int a galaxy far far away";
    para2.textContent="float the death star";
document.body.appendChild(para);
document.body.appendChild(para1);
document.body.appendChild(para2);


}                                
const buttons=document.querySelectorAll('button');
for (const button of buttons){
    button.addEventListener("click",createParagraph);
}
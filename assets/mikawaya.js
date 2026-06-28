const autoGetFormId = () => {
    const inputElm = document.getElementById("mikawaya-hidden-selling-plan-id");
    if(inputElm){
      const formElm = document.querySelector(
      "form[action='/cart/add'][is='product-form']:not(.installment)"
      );
      const targetFormId = formElm.getAttribute("id");
      inputElm.setAttribute("form", targetFormId);
      // eslint-disable-next-line no-console
      console.log("Mikawaya: auto insert form id");
    }
  };
  
  autoGetFormId();

const initState = {
    navOpen: false,
    navEdit:{
        title:"Navbar",
        loginC:"",
        login:"none"},
    check: false,
    footerOpen:false,
    landOpen:false,
    footerEdit:{
        title:"Footer Content",
        desc:"Here you can use rows and columns here to organize your footer content.",
        bgColor:"blue",
        textColor:""
    },
    landEdit:{
        first:"https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg",
        second:"https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg",
        third:"https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
    }
        
    
}
const loginCode=`<Form inline style={{display:el.login}}>
<FormControl type="email" placeholder="Email" required autoComplete="email" style={{borderRadius:3, marginRight:10, border:"none"}} className="mr-sm-2" />
<FormControl type="password" placeholder="Password" required autoComplete="password" style={{borderRadius:3, marginRight:10, border:"none"}} className="mr-sm-2" />
<Button variant="outline-primary">Login</Button>
</Form>`

export default function genReducer(state = initState, action) {
    switch (action.type) {
        case "OPEN_MODAL":
            {       
                if(action.name==="Configure your Navbar"){
                    return {...state, navOpen: state.navOpen=true}
                } else if(action.name==="Configure your Footer"){
                    return{...state, footerOpen: state.footerOpen=true}
                } else if(action.name==="Configure your carousel"){
                    return{...state, landOpen: state.landOpen=true}
                }else if(action.name==="Follow these steps"){
                    window.open("https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/")
                }
                
                break
            }
        case "CLOSE_MODAL":{
            if(action.name==="navbar"){
                return {...state, navOpen: state.navOpen=false}
            }else if(action.name==="footer"){
                return{...state, footerOpen: state.footerOpen=false}
            }else if(action.name==="land"){
                return{...state, landOpen: state.landOpen=false}
            }
            break        }
        case "HANDLE_CHECK":{
            if(state.navEdit.login==="none"){
            return {...state, navEdit: {...state.navEdit, loginC: loginCode, login:"block"}, check:true}
            }else{
            return {...state, navEdit: {...state.navEdit, loginC: "", login:"none"}, check:false}
            }
            
        }
        case "NAVBAR_EDIT":{
            return{...state, navEdit: {...state.navEdit, [action.state]:action.value}}
        }
        case "FOOTER_EDIT":{
            return{...state, footerEdit: {...state.footerEdit, [action.state]:action.value}}
        }
        case "LAND_EDIT":{
            return{...state, landEdit: {...state.landEdit, [action.state]:action.value}}
        }
        default: return state
    }


}

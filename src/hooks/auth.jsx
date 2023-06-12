import { createContext,useContext,useEffect,useState } from "react";
import { api } from "../services/api";
const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data,setData] = useState({});

    async function updateProfile({user,avatarFile}){
        
        if(avatarFile){
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar",avatarFile)

            const response = await api.patch("/user/avatar",fileUploadForm);
            user.avatar = response.data.avatar

        }
        
        
        try {
            await api.put("/user",user);
            console.log(user)
            localStorage.setItem("@notes:user",JSON.stringify(user));
            setData({user,token:data.token})   

            alert("perfil atualizado.")
            
        }
        catch(err){
            if(err.response){
                alert(err.response.data.message)
            }
            else {alert("nao foi possivel atualizar.")}
        }        
    }
    
    async function signIn({email,password}){
        try{
            const response = await api.post("/sessions",{email,password});
            const {user,token} = response.data;
            console.log(user,"user na autenticacao")
            localStorage.setItem("@notes:user",JSON.stringify(user));
            localStorage.setItem("@notes:token",token)
            
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({user,token})
            console.log(user,token)
        }
        catch(err){
            if(err.response){
                alert(err.response.data.message)
            }
            else{
                alert("Não foi possível fazer login.")
            }
        }
    }
    

    function signOut(){
        setData({})
        localStorage.removeItem("@notes:user");
        localStorage.removeItem("@notes:token");
    }
    useEffect(()=>{
        const token = localStorage.getItem("@notes:token");
        const user = localStorage.getItem("@notes:user");
        if(token && user){
            
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({token,user:JSON.parse(user)})
        }
    },[])



    return(
        <AuthContext.Provider value={{updateProfile,signOut,signIn,user:data.user}}>


            {children}


        </AuthContext.Provider> 
    );
};




function useAuth(){
    const context = useContext(AuthContext);

    return context
}


export { AuthProvider,useAuth };
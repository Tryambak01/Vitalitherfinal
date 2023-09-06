export default function UserProfile({params}: any){    //accepts any parameters such as userid such as /profile/abc
    return(
        <div className=" items-center flex flex-col justify-center py-2 min-h-screen">
            <h1>Profile</h1>
            <hr/>
             <p className="text-4xl">Profile page 
             <span className="p-2 ml-2 rounded text-black bg-orange-500">{params.id}</span></p>
             
        </div>
    )
}
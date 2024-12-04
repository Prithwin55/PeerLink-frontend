const cloud_name = "dkw8rcpk5"
const upload_preset = "peerlink"

export const uploadToCloud = async (pics,fileType) => {
    
    if (pics && fileType) {
        const data = new FormData()
        data.append("file", pics)
        data.append("upload_preset", upload_preset)
        data.append("cloud_name", cloud_name)
        
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,
            {method:"post",body:data}
        )
        console.log("Response", res)
        const fileData = await res.json()
        console.log("Url", fileData.url)
        return fileData.url
    }   
    else {
        console.log("Error.....")
    }
}
const data=[
    {
        name:'usama',
        age:23,
        gender:'??',
        location:'Karachi',
        image:'https://randomuser.me/api/portraits/men/46.jpg'
    },
    {
        name:'ali',
        age:12,
        gender:'male',
        location:'lahore',
        image:'https://randomuser.me/api/portraits/women/56.jpg'
    },
    {
        name:'erum',
        age:22,
        gender:'female',
        location:'singapore',
        image:'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        name:'yousuf',
        age:24,
        gender:'male',
        location:'buffer-zone',
        image:'https://randomuser.me/api/portraits/men/56.jpg'
    }
]
const profiles = profileIterator(data);

nextProfile();
//get the next event
document.getElementById('next').addEventListener('click',nextProfile);

function nextProfile(){
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML=
    `
    <ul class = 'list-group'>
    <li class = 'list-group-item'>Name:${currentProfile.name}</li>
    <li class = 'list-group-item'>Age:${currentProfile.age}</li>
    <li class = 'list-group-item'>Gender:${currentProfile.gender}</li>
    <li class = 'list-group-item'>Location:${currentProfile.location}</li>
    </ul>
    `

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}"/>`;
    } else{
        window.location.reload();
    }
}

function profileIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < profiles.length? 
            {value:profiles[nextIndex++], done : false}:
             {done:true} 
        }

    };
}
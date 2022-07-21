const currentUser = document.querySelectorAll('.currentUser');
const comments = document.querySelectorAll('.comments');
const replices = document.querySelectorAll('.replices');

console.log(comments);

let jsonDados = [
    {
        "currentUser": {
            "image": {
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
        },
        "comments": [
            {
                "id": 1,
                "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
                "createdAt": "1 month ago",
                "score": 12,
                "user": {
                    "image": {
                        "png": "./images/avatars/image-amyrobson.png",
                        "webp": "./images/avatars/image-amyrobson.webp"
                    },
                    "username": "amyrobson"
                },
                "replies": []
            },
            {
                "id": 2,
                "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
                "createdAt": "2 weeks ago",
                "score": 5,
                "user": {
                    "image": {
                        "png": "./images/avatars/image-maxblagun.png",
                        "webp": "./images/avatars/image-maxblagun.webp"
                    },
                    "username": "maxblagun"
                },
                "replies": [
                    {
                        "id": 3,
                        "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                        "createdAt": "1 week ago",
                        "score": 4,
                        "replyingTo": "maxblagun",
                        "user": {
                            "image": {
                                "png": "./images/avatars/image-ramsesmiron.png",
                                "webp": "./images/avatars/image-ramsesmiron.webp"
                            },
                            "username": "ramsesmiron"
                        }
                    },
                    {
                        "id": 4,
                        "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                        "createdAt": "2 days ago",
                        "score": 2,
                        "replyingTo": "ramsesmiron",
                        "user": {
                            "image": {
                                "png": "./images/avatars/image-juliusomo.png",
                                "webp": "./images/avatars/image-juliusomo.webp"
                            },
                            "username": "juliusomo"
                        }
                    }
                ]
            }
        ]
    }
];
let cont = 0;
let cont2 = 0;

jsonDados.forEach((dados) => {
    
    currentUser.forEach((item) => {
        item.getElementsByClassName('js-image')[0].src = dados.currentUser.image.png;
        
    });

    comments.forEach((item) => {
        item.getElementsByClassName('js-image')[0].src = dados.comments[cont].user.image.png;
        item.getElementsByClassName('js-username')[0].innerHTML = dados.comments[cont].user.username;
        item.getElementsByClassName('js-createdAt')[0].innerHTML = dados.comments[cont].createdAt;
        item.getElementsByClassName('js-score')[0].innerHTML = dados.comments[cont].score;
        cont++;
    });

    replices.forEach((item) => {
        // if(dados.comments[cont2.replices[cont2].leg])
        // item.getElementsByClassName('js-image')[0].src = dados.comments[cont2].replies[cont2].user.image.png;
        cont2++;
        console.log(cont2);
    });
});



















// const tempUsuarios = {
//     currentUser: {
//         image: {
//             png: "./images/avatars/image-juliusomo.png",
//             webp: "./images/avatars/image-juliusomo.webp"
//         },
//         username: "juliusomo"
//     }
// }

// const tempClient = {
//     nome: 'Darlan',
//     email: 'darlan@teste.com.br',
//     celular: '62999990000',
//     cidade: 'Goiânia'
// }

const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('db_user')) ?? [];
}

const setLocalStorage = (dbUser) => {
    return localStorage.setItem('db_user', JSON.stringify(dbUser));
}

// CRUD - create, read, update, delete;

// CRUD CREATE
const createUser = (user) => {
    const dbUser = getLocalStorage(); // Recebe as tabelas do BD
    dbUser.push(user); // Adiciona os novos dados no final da tabela;
    setLocalStorage(dbUser); // Envia a nova tabela para o BD;

}

// CRUD READ
const readUser = () => {
    return JSON.parse(localStorage.getItem('db_user')) ?? []; // Mostra a tabela do BD;
}

// CRUD UPDATE
const updateUser = (index, user) => {
    const dbUser = readUser(); // Recebe as tabelas do BD;
    dbUser[index] = user; // Muda os dados que estão no index informado;
    setLocalStorage(dbUser); // Envia a nova tabela para o BD;
}

// CRUD DELETE
const deleteUser = (index) => {
    const dbUser = readUser();
    dbUser.splice(index, 1);
    setLocalStorage(dbUser);
}




// console.log(primeiro.getElementsByTagName('img')[2]);

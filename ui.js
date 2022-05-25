class UI{
    constructor()
    {
        this.profileContainer=document.querySelector('#profileContainer');
        this.alert=document.querySelector('#alert');
    }

    showProfile(profile)
    {
        this.profileContainer.innerHTML=`

            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <img src="https://placebeard.it/640x360" class="img-thumbnail" />
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                Name:${profile.name}
                            </li>

                            <li class="list-group-item">
                                Email:${profile.email}
                            </li>

                            <li class="list-group-item">
                                Adress:${profile.street}
                            </li>

                            <li class="list-group-item">
                                Phone:${profile.phone}
                            </li>
                        <ul/>

                        <h4>To Do List</h4>
                        <div class="col-md-9">
                        <ul id="todo" class="list-group">

                        <ul/>
                        </div>
                        

                    </div>
                </div> 
            </div>

        `;
    }

    showAlert(text){
        this.alert.innerHTML=`${text} is not found`;
    }

    showToDos(todo){
        
        let html="";

        todo.forEach(item => {
            if(item.complated){
                html+=`

                    <li class="list-group-item bg-success">
                        ${item.title}
                    </li>

                `;
            }
            else{
                html+=`

                    <li class="list-group-item bg-secondary">
                        ${item.title}
                    </li>

                `;
            }
        });

        this.profileContainer.querySelector('#todo').innerHTML=html;

    }

    clear(){
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";
    }

   

    
}
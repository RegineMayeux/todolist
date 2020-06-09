import React, { Component } from 'react';
import Task from  "./Task";

class TodoList extends Component {
    state = { 
        todoListTitle: "Ma Todolist",
        tasks: [
            {
                task: "Contacter le traiteur",
                underTasks: [
                    "Prévoir de la bière (beaucoup)", 
                    "Du vin blanc pour Audrey",
                    "Des amuse-bouches",
                    "Choisir la pièce-montée pour tous les affamés de la P6"
                ]
            },
            {
                task: "Contacter le DJ",
                underTasks: [
                    "Faire une play-list avec la zic préférée de JB", 
                    "A-t-il un stromboscope pour faire péter le disjoncteur ?",
                    "Lui demander son tarif pour danser jusqu'au petit matin...",
                    "S'occupe-t-il du feu d'artifice si on est encore en état ?"
                ]
            },
            {
                task: "Contacter la Mairie",
                underTasks: [
                    "Voir si on peut la fleurir de la cave au grenier", 
                    "Demander l'heure du mariage pour éviter d'être en retard",
                    "Demander le nombre de chaises pour asseoir tout le monde",
                    "Choisir la musique pas trop cucul la praline",
                    "Demander l'autorisation de jeter des confettis pour marquer le coup !"
                ]
            },
        ]
     }
    render() { 
        return ( 
            <div className="todolist">
                <h2 className="todolist__title">{this.state.todoListTitle}</h2>
                <Task tasks={this.state.tasks} />
            </div>

         );
    }
}
 
export default TodoList;
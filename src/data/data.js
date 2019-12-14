const initialData ={
    tasks :{
        'task-1':{ id:'task-1', content:'First task'},
        'task-2':{ id:'task-2', content:'Second Task'},
        'task-3':{ id:'task-3', content:'Third Task'}
    },
    coloums : {
        'coloum-1':{
            id:'coloum-1',
            title:'To do',
            taskIds:['task-1','task-2','task-3'],
        }
    },
    coloumOrder :['coloum-1']
}
export default initialData;
//INICIALIZAR VARIABLES

//Matriz de costos de los nodos
const matrizCostoNodos = [[0, 3, 5, 2, 100, 100, 100, 10],
                    [3, 0, 5, 8, 4, 100, 6, 6],
                    [5, 5, 0, 100, 1, 7, 9, 100],
                    [2, 8, 100, 0, 12, 100, 100, 14],
                    [100, 4, 1, 12, 0, 100, 15, 100],
                    [100, 100, 7, 100, 100, 0, 100, 9],
                    [100, 6, 9, 100, 15, 100, 0, 3],
                    [10, 6, 100, 14, 100, 9, 3, 0]];

//Matriz de adyasencia de los nodos
const matrizAdyNodos = [[0, 1, 1, 1, 0, 0, 0, 1],
                        [1, 0, 1, 1, 1, 0, 1, 1],
                        [1, 1, 0, 0, 1, 1, 1, 0],
                        [1, 1, 0, 0, 1, 0, 0, 1],
                        [0, 1, 1, 1, 0, 0, 1, 0],
                        [0, 0, 1, 0, 0, 0, 0, 1],
                        [0, 1, 1, 0, 1, 0, 0, 1],
                        [1, 1, 0, 1, 0, 1, 1, 0]];

const conexiones= {A:{H:10, D:2, B:3, C:5},
                B:{C:5, E:4, G:6, A:3, H:6, D:6},
                C:{A:5, B:5, G:9, E:1, F:7},
                D:{H:14, A:2, B:8, E:12},
                E:{C:1, B:4, D:12, G:15},
                F:{C:7, H:9},
                G:{H:3, B:6, C:9, E:15},
                H:{A:10, F:9, B:6, G:3, D:14}};

var nodoIni;             //Almacena el nodo de origen desde donde comienza el recorrido
var nodoAct;             //Almacena el nodo en que se encuentra actualmente
var nodosVisit = [];     //Almacena un array al que se le van a agregando los nodos que se visiten
var nodoSelec;           //Almacena un nodo seleccionado en base a una condicion o una funcion
var costNdoAct;          //Almacena el costo del nodo actual
var rutaActual = [];     //Almacena los nodos que se vayan visitando, simulando asi la ruta seguida
var costRuta;            //Almacena el costo de la ruta
var iEme;                //Iterador de emergencia en caso de que el bucle de vueltas de mas

//INDICAR NODO INICIAL
nodoIni = prompt("Ingresa el nodo incial");

//COMIENZO DE LA LOGICA
nodoAct = nodoIni;

//Obtener el valor que sea menor
const getValMenor = (val1, val2) => {

}

//Verificar posibles caminos de un nodo y retornar el camino mas corto
const checkWays = (node) => {
    let countWays = Object.keys(conexiones[node]).length;   //Cuenta los caminos posibles
    if(countWays > 1){
        let nodo = Object.values(conexiones[node]);
        let valMen, val1, val2;
        for(let i = 0; i < countWays; i++){
            val1 = nodo[i];
            val2 = nodo[i+1];        
            if(val1 < val2){
                if(valMen === undefined){
                    valMen = val1;
                }
                if(val1 < valMen){
                    valMen = val1;
                } else {
                    continue;
                }
            } else if(val2 < val1){
                if(valMen === undefined){
                    valMen = val2;
                }
                if(val2 < valMen){
                    valMen = val2;
                } else {
                    continue;
                }
            } else if(val2 === val1){
                if(valMen === undefined){
                    valMen = val1;
                }
                if(val1 < valMen){
                    valMen = val1;
                } else {
                    continue;
                }
            } else if(val2 === undefined){
                if(val1 < valMen){
                    valMen = val1;
                }
            }
        }
        return valMen;
    }
}

checkWays(nodoAct);
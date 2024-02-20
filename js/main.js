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

var nodoIni;             //Almacena el nodo de origen desde donde comienza el recorrido
var nodoAct;             //Almacena el nodo en que se encuentra actualmente
var nodosVisit = [];     //Almacena un array al que se le van a agregando los nodos que se visiten
var nodoSelec;           //Almacena un nodo seleccionado en base a una condicion o una funcion
var costNdoAct;          //Almacena el costo del nodo actual
var rutaActual = [];     //Almacena los nodos que se vayan visitando, simulando asi la ruta seguida
var costRuta;            //Almacena el costo de la ruta
var iEme;                //Iterador de emergencia en caso de que el bucle de vueltas de mas

//INDICAR NODO INICIAL
nodoIni = 5;    //De momento lo asiganamos de manera manual para enfocarnos primeramente en el funcionamiento (5 para trabajar con el nodo F segun la matriz)

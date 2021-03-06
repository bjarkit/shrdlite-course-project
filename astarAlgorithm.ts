/// <reference path="lib/collections.ts" />
module Astar {      
    //n.state:,
    //n.parent:,
    //n.action:,
  export class Node{
    id: string;
    fscore: number;
    gscore: number; 
    children: [Node]
    successor: Node
    constructor(_id:string){
      this.id = _id;
    }
  }
  interface Functions{
    // A heuristic approx. of the distance from
    // n1 to the goal (as defined by is_goalNode)
    heuristic_approx(n1:Node) : number
    dist_between(n1:Node, n2:Node) : number
    get_children(n1:Node) : Node[]
    is_goalNode(n1:Node) : boolean
  }
/*
Implementation: Strongly inspired by the wikipedia pseduocode

AStar :: Graph -> Path
*/
 export function Astar(s: Node, functions : Functions): Node[]{
    //Node comparion function
    var start:Node = s;
    function comp(a:Node,b:Node){
      if (a.fscore < b.fscore)
        return 1;
      else if (a.fscore > b.fscore)
        return -1;
      else if (a.id === b.id) 
        return 0;
      else {
        return 1;
      }
    }
    // Initilization Vendor Types 
    var closedset = new collections.PriorityQueue<Node>(); // nodes allready evaluated.
    var openset =  new collections.PriorityQueue<Node>(comp); // workes in paralell with opensset
    // Initial calculations 
    start.gscore = 0; // the inital distace 
    start.fscore = start.gscore + functions.heuristic_approx(start);
    openset.add(start);
    // Variable initiations moved outside reduce redundancy 
    var current : Node
    var neighbors : Node[]
    /*
    g_score - is compared with the gscore - where gscore is the traveled distance - 
    of the node to check gscore can be reduced.
    for example, if there are two ways of reaching node x, then after it has been explored, 
    then the other path might provided a lower value.  
    */
    while (!openset.isEmpty()){
        /*
        Necessary check! Without it the program will not terminate.
        It checks if the current node is the goal node,
        if it is then finds and returns the path.
        */
        current = openset.dequeue(); 
        if(functions.is_goalNode(current)){
          var path = new collections.LinkedList<Node>();
          path.add(current)
          while(current.successor){
              current = current.successor;
              path.add(current);
          }
          path.reverse()
          return path.toArray()
        }
        /*
        All modifying actions performed on the set will also have to be performed
        on the queue.
        */
        closedset.add(current)
        neighbors = functions.get_children(current) // expand the node that is first in the queue.
         /*
        All the neigbors are checked, in several ways    
        */ 
        for(var n in neighbors){

            if (!closedset.contains(neighbors[n])){
                var g_score = current.gscore + functions.dist_between(current,neighbors[n])
                
                if (!openset.contains(neighbors[n]) || neighbors[n].gscore > g_score){ // checks if the new path is better 

                    neighbors[n].successor = current
                    neighbors[n].gscore = g_score
                    neighbors[n].fscore = neighbors[n].gscore + functions.heuristic_approx(neighbors[n]);
                    
                    if (!openset.contains(neighbors[n])){
                        // The neighbors[n] has passed all checks and the node is added, before the next node is considered.
                        openset.add(neighbors[n]);
                    }
                }
            }
        }

        
    }
    //     if we end up here then there is no path between start and goal  
    throw new Error("no path!");
  }
};


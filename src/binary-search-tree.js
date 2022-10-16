const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

    root() {
      if(typeof this.tree === 'undefined') {
            return null;
            
      }
      return this.tree;
    }
 ////////////////////// add ///////////////////// 
    add( data ) {
        if(typeof this.tree === 'undefined' ) {
            this.tree = {
                data: data,
                left: null,
                right: null
            };
            return this.tree;

        } else if (this.tree.data === null) {
            this.tree.data = data;
            return this.tree;
        };

        let nodeToPaste = {
            data: data,
            left: null,
            right: null
        }
        
       // let current = this.tree;
        function paste(tree, newNode) {
           // c('The tree before iter :');
            //c(tree);
            

            if(tree === null) {
                tree = {
                    data: newNode.data,
                    left: null,
                    right: null
                };
                
                return tree;
            }

            if(tree.data === newNode.data) {
                return tree;
            }
            
            //c('Current data :');
            //c(tree.data);
            //c('Want to paste data \n'+ newNode.data);
            if( tree.data > newNode.data) {
                
                tree.left = paste(tree.left, newNode);
                return tree;
            } else {
                tree.right = paste(tree.right, newNode);
                return tree;
            }

        }

        

        return  paste(this.tree, nodeToPaste);
    }
  ///////////////// has /////////////////////
    has(iWonder) {
        //if(this.tree.data === iWonder) return true;
        
        function findMe( subTree, search ) {
            let ans ;
            if(subTree.data === search) {
                return true;
            }

            if(subTree.data > search) {
                if(subTree.left === null) return false;
                ans = findMe(subTree.left, search);
            } else {
                if(subTree.right === null) return false;
                ans = findMe(subTree.right, search);
            }

            return ans;

        }
        
        return findMe(this.tree, iWonder);    
    }
  //////////////////////////////////////// find ////////////////////////////////////////////
    find( lookFor ) { 
        console.log(lookFor);
        if(this.tree.data === lookFor) return this.tree;

        function findMe( subTree, search ) {
            let ans;
            //c(subTree.data+' '+search);
            if(subTree.data === search) {
                return subTree;
            }

            if(subTree.data > search) {
                if(subTree.left === null) return null;
                ans = findMe(subTree.left, search);
            } else {
                if(subTree.right === null) return null;
                ans = findMe(subTree.right, search);
            }

            return ans;

        }

        

        return  findMe(this.tree, lookFor);;      
      
    }
//////////////////////////////////////// remove //////////////////////////////////////  
    remove( dismiss ) {
        

        function findNRemove (node, value, parent) {
            //c('removing '+value);
            //c('current '+node.data);
            //c('if '+(node.data === value));
            let ans;

            if(node === null) return node;

            if(node.left === null && node.right === null && node.data === value) {
                parent.left === node ? parent.left = null : parent.right = null;
                return node;
            }

            if( ( node.left === null || node.right === null ) && node.data === value ) {
                parent.left === node ? 
                    parent.left = node.right : parent.right = node.right;
                    return node;
            }

            if( node.data === value ) {
                //c(parent.left.data);
                //c(parent.right === node);
                //c(node);
                if(parent !== null && parent.left === node) {
                    parent.left = node.right;
                    
                    let stop = false;
                    let next = node.right;

                    for(let i = 0; !stop; i++) {
                        if(next.left === null) {
                            next.left = node.left;
                            stop = true;
                        } else {
                            next = next.left;
                        }
                    }

                } else if(parent !== null && parent.right === node) {
                    
                    parent.right = node.right;
                    
                    let stop = false;
                    let next = node.right;

                    for(let i = 0; !stop; i++) {
                        if(next.left === null) {
                            next.left = node.left;
                            stop = true;
                        } else {
                            next = next.left;
                        }
                    }
                } else if(parent === null) {
                    let stop = false;
                    let next = node.right;

                    for(let i = 0; !stop; i++) {
                        if(next.left === null) {
                            next.left = node.left;
                            stop = true;
                        } else {
                            next = next.left;
                        }
                    }

                    node.data = node.right.data;
                    node.left = node.right.left;
                    node.right = node.right.right;
                    
                    
                }
                return node;
            }

            if(node.data > value) {
                ans = findNRemove(node.left, value, node);
            } else {
                ans = findNRemove(node.right, value, node);
            }

            return false;
        }

        return findNRemove (this.tree, dismiss, null);
        
    }
  
    min() {
        let stop = false;
        let left = this.tree.left;

        if(left === null) return this.tree.data;
        for(let i = 0; true; i++) {
            if(left.left === null) {
                return left.data;
            }
                        
            left = left.left;
            
        }
    }
  
    max() {
        
        let right = this.tree.right;

        if(right === null) return this.tree.data;
        
        for(let i = 0; true; i++) {
            if(right.right === null) {
                return right.data;
            }
                        
            right = right.right;
            
        }
     
    }
  }

module.exports = {
  BinarySearchTree
};
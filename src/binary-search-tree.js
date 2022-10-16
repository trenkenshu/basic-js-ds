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
  ///////////////// find ///////////////////
    find( lookFor ) { 
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
  
    remove(/* data */) {
      
    }
  
    min() {
      
    }
  
    max() {
      
    }
  }

module.exports = {
  BinarySearchTree
};
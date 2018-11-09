# ionicFirst
<img width="329" alt="screen shot 2018-06-05 at 9 51 31 pm" src="https://user-images.githubusercontent.com/9949849/40989356-2f5aca02-690b-11e8-8dda-7e89e986fd49.png">




#installation of Ionic

#step 1:

install homebrew: /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

link:=> https://brew.sh/

check homebrew is install :  run $ brew   in terminal

#step 2: install node :
                brew install node
                
#step 3: check  node version:    npm -v  

#step 4: https://ionicframework.com/getting-started#cli

         npm install -g ionic cordova  (or) npm install -g cordova ionic  (or)  npm install -g ionic
          ionic start myApp tabs
          cd myApp 
          ionic serve   (local machine)
          
          /* For android phone */
          ionic cordova platform add android
          
          ionic cordova run android  (android device)
          
             /* For ios mobile */
             
          ionic cordova platform add ios
          ionic cordova run ios  (ios device)





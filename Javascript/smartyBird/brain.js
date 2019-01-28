function createBrain(){

    tf.tidy(() => {// Dodge memory overwhelm

      //Fully connected

      this.modelo = tf.sequential();

      //Hidden layer

      this.modelo.add(tf.layers.dense({
        units: 3 ,
        inputShape: [2],
        activation: 'sigmoid'

      }));

      //Output Layer

      this.modelo.add(tf.layers.dense({
        units: 1,
        activation: 'sigmoid'
      }));

      //Optimizer and loss functions

      this.modelo.compile({
        optimizer: tf.train.sgd(lr),
        loss: tf.losses.meanSquaredError

      });



    });
    return this.modelo;
}

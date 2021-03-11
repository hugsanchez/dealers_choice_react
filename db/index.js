const {Sequelize, DataTypes, Model} = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL|| 'postgres://localhost/supermarket');


class Produce extends Model {}
class Meat extends Model {}
class Dairy extends Model {}

Produce.init({
    name: DataTypes.STRING
},{sequelize:db, modelName: 'produce'});

Meat.init({
    name: DataTypes.STRING,
},{sequelize:db, modelName:'meat'});

Dairy.init({
    name: DataTypes.STRING,
},{sequelize:db, modelName:'dairy'}); 

const syncAndSeed = async() => {
    try{
        await db.sync({force:true});

        const [carrot, lettuce, onion, broccoli, potato, bellPeppers, celery] = ['Carrot', 'Lettuce', 'Onion', 'Broccoli', 'Potato', 'Bell Peppers', 'Celery'].map(veggie =>
            new Produce({
                name: veggie,
            }));

        await Promise.all([carrot.save(), lettuce.save(), onion.save(), broccoli.save(), potato.save(), bellPeppers.save(), celery.save()]);

        const [chicken, beef, fish, lamb, lobster] = ['Chicken', 'Beef', 'Fish', 'Lamb', 'Lobster'].map(meat =>
            new Meat({
                name: meat,
            }));
        await Promise.all([chicken.save(), beef.save(), fish.save(), lamb.save(), lobster.save()]);

        const [milk, eggs, cheese] = ['Milk', 'Eggs', 'Cheese'].map(dairy =>
            new Dairy({
                name: dairy,
            }));
        await Promise.all([milk.save(), eggs.save(), cheese.save()]);
    } catch(ex){
        console.log(ex)
    }
};

module.exports = {
    syncAndSeed,
    db,
    models:{
        Produce,
        Meat,
        Dairy
    }
}
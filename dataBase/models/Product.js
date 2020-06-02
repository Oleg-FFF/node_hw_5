module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            brand: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            sale_price: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            coupon_code: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            tableName: 'products',
            timestamps: false
        })


    return Product;
};

'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'PokerRooms';
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        name: 'California Grand Casino',
        address: '5988 Pacheco Blvd',
        city: 'Pacheco',
        state: 'CA',
        zip: '94553',
        phone: '(925) 676-7500',
        website: 'https://www.californiagrandcasino.com/',
        image: 'https://www.californiagrandcasino.com/wp-content/uploads/2020/08/logo-300x134.png.webp',
        description: 'California Grand Casino is located in Pacheco, California. The casino is open 24 hours a day, 7 days a week. The casino\'s 40,000 square foot gaming space features 1,000 gaming machines and twenty-five table and poker games. The property has four restaurants and a hotel with 100 rooms.',
      },
      {
        userId: 1,
        name: 'Oaks Card Club',
        address: '4097 ',
        city: 'Emeryville',
        state: 'CA',
        zip: '94608',
        phone: '(510) 653-0100',
        website: 'https://www.oakscardclub.com/',
        image: 'https://www.oakscardclub.com/wp-content/uploads/2022/07/oaks-card-club-1.png',
        description: 'Oaks Card Club is located in Emeryville, California. The casino is open 24 hours a day, 7 days a week. The casino\'s 40,000 square foot gaming space features 1,000 gaming machines and twenty-five table and poker games. The property has four restaurants and a hotel with 100 rooms.',
      },
      {
        userId: 1,
        name: 'Casino M8trix',
        address: '1887 Matrix Blvd',
        city: 'San Jose',
        state: 'CA',
        zip: '95110',
        phone: '(408) 451-8888',
        website: 'https://www.casinom8trix.com/',
        image: 'https://media.licdn.com/dms/image/C560BAQGGNgP_Id3DOw/company-logo_200_200/0/1522881690356?e=1687996800&v=beta&t=IiFjUk4AGc07OsdENgSzFX_CXfTD-Be3xKFfvXtfyMc',
        description: 'Casino M8trix is located in San Jose, California. The casino is open 24 hours a day, 7 days a week. The casino\'s 40,000 square foot gaming space features 1,000 gaming machines and twenty-five table and poker games. The property has four restaurants and a hotel with 100 rooms.',
      },
      {
        userId: 1,
        name: 'Bay 101',
        address: '1788 N. First Street',
        city: 'San Jose',
        state: 'CA',
        zip: '95112',
        phone: '(408) 451-8888',
        website: 'http://www.bay101.com/',
        image: 'https://xvvb1f.a2cdn1.secureserver.net/wp-content/uploads/2020/01/logo.png',
        description: 'Bay 101 is located in San Jose, California. The casino is open 24 hours a day, 7 days a week. The casino\'s 40,000 square foot gaming space features 1,000 gaming machines and twenty-five table and poker games. The property has four restaurants and a hotel with 100 rooms.',
      },
      {
        userId: 1,
        name: 'Lucky Chances',
        address: '1700 Hillside Blvd',
        city: 'Colma',
        state: 'CA',
        zip: '94014',
        phone: '(650) 755-8811',
        website: 'https://www.luckychances.com/',
        image: 'https://pokeratlas-images-production.s3.amazonaws.com/venues/images/LFve5H0iZ20m7kQ',
        description: 'Lucky Chances is located in Colma, California. The casino is open 24 hours a day, 7 days a week. The casino\'s 40,000 square foot gaming space features 1,000 gaming machines and twenty-five table and poker games. The property has four restaurants and a hotel with 100 rooms.',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'PokerRooms';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['California Grand Casino', 'Oaks Card Club', 'Casino M8trix', 'Bay 101', 'Lucky Chances'] }
    }, {});
  }
};

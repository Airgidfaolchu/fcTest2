angular.module('myApp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Healthconds', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var healthconds = [
    { id: 0, name: 'Abscesses' },
    { id: 1, name: 'Acid/alkaline balance' },
    { id: 2, name: 'Acne' },
    { id: 3, name: 'AIDS' },
    { id: 4, name: 'Alcoholism' },
    { id: 5, name: 'Alopecia' },
    { id: 6, name: 'Alzheimers disease' },
    { id: 7, name: 'Anaemia' },
    { id: 8, name: 'Anorexia nervosa' },
    { id: 9, name: 'Antibiotics' },
    { id: 10, name: 'Anxiety disorder' },
    { id: 11, name: 'Asthma' },
    { id: 12, name: 'Atherosclerosis' },
    { id: 13, name: 'ADHD' },
    { id: 14, name: 'Autism' },
    { id: 15, name: 'Backache' },
    { id: 16, name: 'Bloating' },
    { id: 17, name: 'Blepharitis' },
    { id: 18, name: 'Bloodshot eyes' },
    { id: 19, name: 'Bowel Cancer' },
    { id: 20, name: 'Breast cancer' },
    { id: 21, name: 'Bronchitis' },
    { id: 22, name: 'Bursitis' },
    { id: 23, name: 'Cancer' },
    { id: 24, name: 'Canker sores' },
    { id: 25, name: 'Carpal Tunnel Syndrome' },
    { id: 26, name: 'Cellulite' },
    { id: 27, name: 'Chlamydia' },
    { id: 28, name: 'Chronic Fatigue Syndrome' }
  ];

  return {
    all: function() {
      return healthconds;
    },
    get: function(healthcondId) {
      // Simple index lookup
      return healthconds[healthcondId];
    }
  }
});

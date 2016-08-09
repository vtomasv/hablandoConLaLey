from monkeylearn import MonkeyLearn

# Use the API key from your account
ml = MonkeyLearn('<YOUR API KEY HERE>')

# Create a new classifier
res = ml.classifiers.create('Test Classifier')

# Get the id of the new module
module_id = res.result['classifier']['hashed_id']

# Get the id of the root node
res = ml.classifiers.detail(module_id)
root_id = res.result['sandbox_categories'][0]['id']

# Create two new categories on the root node
res = ml.classifiers.categories.create(module_id, 'Negative', root_id)
negative_id = res.result['category']['id']
res = ml.classifiers.categories.create(module_id, 'Positive', root_id)
positive_id = res.result['category']['id']

# Now let's upload some samples
samples = [('The movie was terrible, I hated it.', negative_id), ('I love this movie, I want to watch it again!', positive_id)]
res = ml.classifiers.upload_samples(module_id, samples)

# Now let's train the module!
res = ml.classifiers.train(module_id)

# Classify some texts
res = ml.classifiers.classify(module_id, ['I love the movie', 'I hate the movie'], sandbox=True)
print res.result
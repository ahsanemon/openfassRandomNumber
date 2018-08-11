# openfassRandomNumber
Openfaas application to print a random number


mkdir TestNodeInfo

faas-cli new test-node-info --lang node
find . | grep test-node-info

# Create handler.js, main.js, test-node-info.yaml package.json file in the same directory or download the files from the github

faas-cli build -f random-number-generator.yml

faas-cli push -f random-number-generator.yml

faas-cli deploy -f random-number-generator.yml


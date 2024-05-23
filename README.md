`sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`

> Exit Terminal: RUN exit

`exit`

**Use LTS**
`nvm install --lts`

`nvm use --lts`

**Active ADC**

1. Install GCLOUD CLI FIRST

```
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates gnupg curl
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
sudo apt-get update && sudo apt-get install google-cloud-cli
```

2. ADC

```
gcloud init --no-launch-browser
gcloud auth application-default login --no-launch-browser
```

> Deployment to Cloud Run

1. `gcloud run deploy --source . --port 3000`
2. <YOUR SERVICE NAME>
3. Y
4. 10
5. Y
6. y

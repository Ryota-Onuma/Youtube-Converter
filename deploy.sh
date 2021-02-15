 #!/bin/sh
 . ./.env
echo "Start Deploying"
echo "STEP １/4"
gcloud config set project $YOUTUBE_PROJECT_NAME
echo "STEP 2/4"
gcloud builds submit --project $YOUTUBE_PROJECT_ID --tag gcr.io/${YOUTUBE_PROJECT_ID}/youtube-converter
echo "STEP 3/4"
gcloud beta run deploy youtube-converter \
                      --project ${YOUTUBE_PROJECT_ID} --image gcr.io/${YOUTUBE_PROJECT_ID}/youtube-converter \
                      --platform managed \
                      --allow-unauthenticated \
                      --set-env-vars USER_NAME=$USER_NAME \
                      --set-env-vars USER_PASSWORD=$USER_PASSWORD 
echo "STEP 4/4"
echo "End"
 
 
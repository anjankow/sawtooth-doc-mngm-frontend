# Organization Documents Management

Each organization needs a way to store and update its documents.
And in the organization world, new documents usually have to
be reviewed and signed by its members, before they get accepted.

This application serves as a frontend of a system to manage documents.
It focuses on two main concepts: proposals and documents. 

A document is an accepted version of a proposal. A document can come in several versions,
each might be created by a different person. It is uniquely identified by its name and category.
A user can't create the document directly, only through a proposal and the signing process.

A proposal however can be created by anyone. It needs to include the document name it refers to.
If the document already exists, when the proposal is accepted,
it is added under the same name and category with the next version number.

## Authentication

The application uses Azure AD B2C to authenticate its users and generate an access token
used for each request to the backend server.


## Possible user actions

 - creating a new document proposal (proposed state can be `accepted` or `removed`)
 - signing a proposal
 - getting created and signed proposals
 - getting the accepted documents (by name, signed or created by a user)

# Project layout
```
.  
├── public              # Static parts of the website
└── src                 # Source files
    ├── auth            # Auth relatedcomponents and configuration
    ├── components      # App componenets implementation
    └── pages           # Home and protected view
```

# How to start?

## locally

Prerequisites:
 - NodeJS
 - npm

```
npm start
```

The application will automatically open in a web browser.
The server listens on http://localhost:8080.

## dockerized

Prerequisites:
 - Docker

When using the dockerized application, the production build is used.


First build the image with the tag `frontend`.
```
docker build -t frontend .
```

Next, run the image mappping the port 8080 to the host.
```
docker run -p 8080:8080 frontend
```

Now go to http://localhost:8080 to verify the application run.

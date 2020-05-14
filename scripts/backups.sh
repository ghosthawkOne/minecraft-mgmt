#!/bin/bash
cd /minecraft/MCServer/backups
aws s3 cp $(ls -1rt -I . -I .. | tail -1) s3://ourcraft-backup

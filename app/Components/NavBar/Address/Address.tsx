"use client";
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import styles from "./Address.module.css"
import { clsx } from 'clsx'
import * as Label from '@radix-ui/react-label';
const Address = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className={clsx({[styles.Button]:true, [styles.violet]:true})}>Address</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.DialogOverlay} />
              <Dialog.Content className={styles.DialogContent}>
                <Dialog.Title className={styles.DialogTitle}>Address</Dialog.Title>
                <div style={{ display: 'flex', padding: '0 20px', flexWrap: 'wrap', gap: 15, alignItems: 'center' }}
                    >
                    <Label.Root className={styles.LabelRoot} htmlFor="firstName">

                    </Label.Root>
                    <input className={styles.Input} type="text" id="firstName" placeholder='Search an Address' />
                </div>
                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                  <Dialog.Close asChild>
                    <button className={clsx({[styles.Button]:true, [styles.green]:true})}>Save changes</button>
                  </Dialog.Close>
                </div>

                <Dialog.Close asChild>
                  <button className={styles.IconButton} aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export { Address }

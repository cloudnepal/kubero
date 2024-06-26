import {Addons} from './addons';
import { Kubectl } from './kubectl';
import YAML from 'yaml';
import * as fs from 'fs';
import { IKuberoConfig} from '../types';

describe('Addons', () => {
    it('should load addons', async () => {
        const numberOfAddons = 5;

        const path = process.env.KUBERO_CONFIG_PATH as string || './config.yaml';
        const kubectl = new Kubectl();

        const addons = new Addons({kubectl: kubectl});
        await addons.loadOperators();
        expect(addons).toBeTruthy();
        expect(addons.addonsList.length).toBe(numberOfAddons);
        expect(addons.getAddonsList()).resolves.toBeDefined();
    });
});